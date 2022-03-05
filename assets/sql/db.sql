CREATE TABLE users(
    users_id int(11) AUTO_INCREMENT PRIMARY KEY not null,
    users_name TINYTEXT not null,
    users_email TINYTEXT not null,
    users_pwd LONGTEXT not null,
    users_bday DATE NOT NULL,
    users_created DATETIME not null
)
