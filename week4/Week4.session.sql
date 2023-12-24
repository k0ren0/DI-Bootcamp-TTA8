-- TABLES RELATIONS
-- ONE TO ONE
-- ONE tO MMANY
-- MANY to MANY



create table users (
    id serial primary key,
    username varchar (50) unique not null
);


-- ONE to ONE
CREATE user_profile(
    profile_id SERIAL PRIMARY KEY,
    user_id INT unique NOT NULL REFERENCES users(user_id),
    first_name VARCHAR(50),
);

--ONE to MANY



-- functions
create Ior replace] function function_name (param_11st)
returns return_type language plpgsql
as
S$
declare
-- variable names
begin
-- code |
end
$$