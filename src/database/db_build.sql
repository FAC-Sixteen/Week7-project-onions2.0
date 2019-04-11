BEGIN;

DROP TABLE IF EXISTS actions CASCADE;

CREATE TABLE actions (
    id SERIAL PRIMARY KEY,
    action_point VARCHAR(100) NOT NULL,
    date DATE
);

INSERT INTO actions (action_point, date)
VALUES
    ('stop using gendered language when referring to the entire group (see: "guys")', '2019-03-08'),
    ('use Lost and Founders to keep track of action points and opinions', '2019-04-12');

DROP TABLE IF EXISTS opinions CASCADE;

CREATE TABLE opinions (
    id SERIAL PRIMARY KEY,
    action_id INTEGER REFERENCES actions(id) NOT NULL,
    name VARCHAR(50) NOT NULL,
    opinion TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO opinions (action_id, name, opinion)
VALUES
    (1, 'Anna', 'I would rather we didn''t use "guys" when talking to everyone'),
    (2, 'Kate', 'It might be fun!');



COMMIT;