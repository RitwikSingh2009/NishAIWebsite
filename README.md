# Nish AI waitlist

Next.js static site, deployed by the existing GitHub Pages workflow. The homepage collects launch-update signups through Supabase's Data API. No service-role key belongs in the browser or build configuration.

## Connect Supabase

1. Create or select a Supabase project and run `supabase/migrations/20261027000000_create_waitlist.sql` in its SQL editor (once), or apply it through the Supabase CLI migration workflow.
2. Copy `.env.example` to `.env.local`. Set the project's URL and **publishable** API key from the project settings.
3. For GitHub Pages, add repository **Actions variables** named `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. These public values are embedded during the build; rebuild after changing them.
4. Run `npm run dev`, submit an email, and inspect `public.waitlist_signups` in the Supabase dashboard. Submit the same email with different capitalization and confirm only one row exists.

The migration enables RLS and revokes direct table access from anonymous and authenticated visitors. The intentionally public `join_waitlist` function only inserts validated, normalized emails. It returns the same empty success for new and existing signups, preventing email membership lookup. The honeypot filters basic form bots; it is not rate limiting or CAPTCHA. Add an Edge Function with CAPTCHA verification/rate limiting if abuse protection is needed. Confirmation and launch emails are not sent automatically.

Consent text is tracked as `launch-updates-v1`. Use the dashboard to review/export signups and delete addresses on removal requests. Ensure the existing contact form's `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is configured so removal requests reach you.

## Checks

- `node --test tests/waitlist.test.cjs`
- `npx tsc --noEmit`
- `npm run build`
- Run `supabase/tests/waitlist.sql` in the SQL editor after applying the migration. It rolls back its test data.

Supabase permission design follows https://supabase.com/docs/guides/database/functions.
