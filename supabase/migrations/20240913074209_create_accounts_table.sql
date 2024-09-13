create table accounts (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null,
    name text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    constraint fk_auth_user foreign key (user_id) references auth.users(id) on delete cascade
);

create index idx_accounts_user_id on public.accounts(user_id);

create or replace function update_updated_at() returns trigger as $$ begin new.updated_at = now();
return new;
end $$ language plpgsql security definer
set search_path = '';

create trigger accounts_updated_at before
update on public.accounts for each row execute function update_updated_at();

alter table public.accounts enable row level security;

create policy users_accounts on public.accounts for all using (
    (
        select auth.uid()
    ) = user_id
);
