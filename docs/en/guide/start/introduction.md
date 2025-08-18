# Introduction

`EaseAdmin` draws inspiration from the excellent PHP framework `Laravel-admin`. However, as business complexity increased and the PHP ecosystem gradually declined, it could no longer meet our needs. Therefore, we developed the `EaseAdmin` backend management panel based on `AdonisJS` and `Amis`. Leveraging Amis's excellent frontend low-code solution, you only need to focus on business logic without worrying about frontend page construction. You can build pages using a visual editor and convert JSON to Amis without writing layout code by hand.

## Environment

* Node >= 20.6.0
* Amis >= 6.12.0
* AdonisJS >= 6.0.0

## Features

* Adopts classic MVC architecture with concise, elegant, and flexible API design
* Easily build pages using Amis without writing frontend code
* Loosely coupled page construction and data operation design for easy data source switching
* CRUD code generation command to generate complete CRUD pages with one click based on data tables
* RBAC permission management with support for unlimited permission nodes
* I18n multilingual internationalization support
* Support for multiple backends, with quick installation and uninstallation via command

## Why Choose AdonisJS as Backend Framework

* TypeScript first, can publish compiled source code, providing better type safety and code hints, reducing errors during development.
* Non-blocking I/O architecture for better performance when handling concurrent requests, especially suitable for high-traffic applications.
* Both frontend and backend use JS/TS development, avoiding language switching costs and improving development efficiency and team collaboration.
* Adopts classic MVC architecture, easy to get started, high flexibility, low migration cost for existing projects, and easy to maintain and extend.
* Out-of-the-box features and complete toolchain reduce repetitive development and enable quick application setup.
* Excellent unit test support makes writing unit tests simple, fast, and enjoyable.
* Most importantly, it's as simple as writing Laravel with TypeScript.