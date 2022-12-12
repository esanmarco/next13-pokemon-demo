CREATE TABLE votes (
    id SERIAL PRIMARY KEY,
    votedFor INTEGER NOT NULL,
    votedAgainst INTEGER NOT NULL,
    votedForName VARCHAR(255) NOT NULL,
    spriteUrl VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    );
    

    INSERT INTO votes (votedFor, votedAgainst, votedForName, spriteUrl, created_at)
    VALUES (0, 0, 'Pikachu', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', NOW());
