CREATE DATABASE IF NOT EXISTS taskmanagerdb;

USE taskmanagerdb;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE tag (
  id INT NOT NULL AUTO_INCREMENT,
  tagName VARCHAR(45) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE status (
  id INT NOT NULL AUTO_INCREMENT,
  statusName VARCHAR(45) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE task (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  description VARCHAR(255) NOT NULL,
  status INT NOT NULL,
  deadline DATE DEFAULT NULL, 
  comments VARCHAR(255) DEFAULT NULL,
  responsible int not null,
  create_by int not null,
  tag int not null,
  PRIMARY KEY(id),
  foreign key(create_by) references user(id),
  foreign key(tag) references tag(id),
  foreign key(status) references status(id),
   foreign key(responsible) references user(id)
);

insert into
  status (statusName)
values
  ('To Do'),
  ('Doing'),
  ('Ready'),
  ('Canceled'),
  ('On Hold');

insert into
  tag (tagName)
values
  ('Alta'),
  ('Media'),
  ('Baja');

insert into
  user (name)
values
  ('Root'),
  ('Admin'),
  ('Basic');