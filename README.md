# Been-API
 ### A restful backend service  for the been website and mobile applications
## Introduction

Been is a simple mobile app that keeps track where you lived. Have you ever had the hassle of filling out a apartment application and forget the places you last lived? Or worse, you need to fill out a detailed one for a security clearance? Been helps with traking this information in one simple place instead of keeping it as clutter of notes, and other sources on your phone. It places everything you need to fill out applications.

This is the backend for the service. The frontend projects are being done elsewhere(links are coming soon!)

## Project Goals
To create a restful service for the various frontends to access this project. This service is written in javascript, using nodejs. The following features are going to be implmented:

Secure login(probally using Auth.net or some oAuth stuff)
A MongoDB for the database
GeoJSON(if possible)
Good Security practices

For the project to meet the MVP:

- Login and logout
- User creation, deletion and editing
- Location data create, delete, and edit
- Location supports USA based addresses(international comes after v1)
- GeoJSON

This project is being built in baby steps. Priority is creating a locations CRUD routes first, before users management.

## Status Updates
 **7/16/2021** -project structure layout and node updates 