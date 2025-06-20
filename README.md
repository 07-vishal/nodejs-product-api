# nodejs-product-api
This is a simple, lightweight Node.js + Express.js REST API built to manage products in memory — ideal for learning and prototyping backend systems without a database.

📦 Features
GET /products – Fetch all available products

POST /products – Add a new product with name and price

DELETE /products/:id – Delete a product by its ID

Uses in-memory storage (no database)

Accepts and returns JSON data

Clean codebase with clear structure and comments

🧰 Technologies Used
Node.js

Express.js

▶️ How to Run This Project
✅ Make sure you have Node.js installed. You can download it from nodejs.org

🔧 1. Clone or Download the Project
If using GitHub:

bash

git clone https://github.com/07-vishal/product-api.git
cd product-api
Or extract the ZIP file if you downloaded it manually.

📦 2. Install Dependencies
Run this in the terminal:

bash

npm install
This will install express.

🚀 3. Start the Server
bash

npm start
Your server will run on:
👉 http://localhost:3000

🧪 API Endpoints
✅ GET /products
Returns a list of all products.

json

[
  { "id": 1, "name": "Galaxy Watch", "price": 199 },
  { "id": 2, "name": "Nebula Speaker", "price": 89 }
]
✅ POST /products
Add a new product.

http
Copy
Edit
POST /products
Content-Type: application/json

{
  "name": "Astro Mug",
  "price": 29.99
}
✅ DELETE /products/:id
Delete a product by its id.

http
DELETE /products/2
💡 Optional Improvements (Future Scope)
Add support for updating products (PUT /products/:id)

Use file-based JSON or MongoDB for persistent storage

Add validation (e.g., name required, price must be numeric)

Add Swagger or Postman documentation

Deploy on Render / Railway
