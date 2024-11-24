# Lukew3 Astral Challenge 11/24/24

Take a picture of a math problem and get a step-by-step solution.

## Getting started
Copy `.env.example` to a new file `.env`.
Add your OPENAPI_API_KEY to the `.env`. You can get one from https://platform.openai.com/api-keys. You will need to fund your account if not already funded. 
Install dependencies:
```
npm ci
```
Run app in dev mode:
```
npm run dev
```
View in your browser at http://localhost:3000

**Optional:**

View on any device with ngrok.
First, [install ngrok](https://download.ngrok.com/).
Then, run:
```
ngrok http 3000
```
You can view the generated url in any browser.
