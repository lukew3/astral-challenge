# Lukew3 Astral Challenge 11/24/24

Take a picture of a math problem and get a step-by-step solution.

<img src="https://github.com/user-attachments/assets/f4ffb6ac-b5b9-46de-9c91-2426450437b2" width="400" />
<img width="300" alt="image" src="https://github.com/user-attachments/assets/b47ec22b-82e0-41c7-8cb3-9567b0c0ef49">

## Getting started
Copy `.env.example` to a new file `.env`.
Add your OPENAI_API_KEY to the `.env`. You can get one from https://platform.openai.com/api-keys. You will need to fund your account if not already funded. 
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
