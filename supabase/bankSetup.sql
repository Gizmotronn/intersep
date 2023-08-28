-- Create the 'banks' table
CREATE TABLE banks (
    bank_id SERIAL PRIMARY KEY,
    bank_name TEXT NOT NULL
);

-- Insert bank data
INSERT INTO banks (bank_name) VALUES
    ('Bank of Melbourne'),
    ('Westpac'),
    ('NAB'),
    ('Combank'),
    ('St George''s'),
    ('ANZ');

-- Create the 'users' table
CREATE TABLE users (
    user_id UUID PRIMARY KEY,
    bank_id INTEGER REFERENCES banks(bank_id),
    credits INTEGER DEFAULT 0
);

-- Create the 'queries' table
CREATE TABLE queries (
    query_id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(user_id),
    query_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    query_text TEXT
);

-- Create a trigger to deduct credits when queries are made
CREATE OR REPLACE FUNCTION deduct_credits()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE users
    SET credits = GREATEST(0, credits - 1)
    WHERE user_id = NEW.user_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_deduct_credits
AFTER INSERT ON queries
FOR EACH ROW
EXECUTE FUNCTION deduct_credits();