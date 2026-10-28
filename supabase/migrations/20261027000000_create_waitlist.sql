begin;
create table public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now(),
  consent_version text not null default 'launch-updates-v1',
  constraint valid_email check (
    email = lower(btrim(email)) and char_length(email) <= 254
    and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
  )
);
alter table public.waitlist_signups enable row level security;
revoke all on table public.waitlist_signups from anon, authenticated;
grant select, delete on table public.waitlist_signups to service_role;

-- Intentionally public signup operation; never returns or exposes stored emails.
create function public.join_waitlist(signup_email text, website text default '')
returns void language plpgsql security definer set search_path = ''
as $$
declare
  normalized_email text := lower(btrim(signup_email));
begin
  if coalesce(website, '') <> '' then return; end if;
  if normalized_email is null or char_length(normalized_email) > 254
     or normalized_email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' then
    raise exception 'Invalid email address' using errcode = '22023';
  end if;
  insert into public.waitlist_signups (email) values (normalized_email)
  on conflict (email) do nothing;
end;
$$;
revoke all on function public.join_waitlist(text, text) from public, anon, authenticated;
grant execute on function public.join_waitlist(text, text) to anon, authenticated;
commit;
