#!/usr/bin/env node

const token = require('.')()

if (token) process.stdout.write(token)