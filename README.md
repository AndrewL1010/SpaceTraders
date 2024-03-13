# Full Stack Space Exploration and Trading Game

Check out the game: [SpaceTraders](https://spacetraders.andrewlu.ca/)

## Overview
- Developed a unique game leveraging a free Web API, SpaceTraders, which allows players to acquire and manage a fleet of ships for intergalactic exploration and trading.

## Technologies Used
- **Frontend:** Vite, React, MUI
- **Backend:** Python Flask, SQL Alchemy
- **Database:** Amazon Relational Database Service with PostgreSQL
- **Infrastructure:** CloudFront, Application Load Balancer, Amazon S3, Nginx, Gunicorn, EC2

## Features
- Connected CloudFront with Application Load Balancer and S3, while configuring Nginx and Gunicorn in an EC2 instance for a performant and highly scalable application.
- Integrated end-to-end and integration testing using Cypress, Vitest, and Pytest.
- Implemented continuous deployment by leveraging GitHub Actions, which automated tests and code updates, saving 15 minutes per commit.
