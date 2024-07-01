# Online Book Exhibition And Sales

## Introduction

Online Book Exhibition And Sales (OB&S) is a web application designed to create a dynamic platform for bibliophiles, authors, and publishers. Leveraging React.js for the frontend, Node.js for the backend, and MongoDB for the database, this project offers an immersive virtual experience for browsing and purchasing books. Key features include user authentication, book issue management, seamless navigation, and subscription services. Our goal is to democratize access to literature, empower authors, and foster meaningful connections within the literary community.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **Registration and Authentication:** Users, Admins can register and log in securely.
- **Search and Issue Books:** Users can search and issue books, while admins can add new books.
- **Fair Model (Discount Offers):** Customers can buy their favourite books at the best possible discounts.
- **Notification:** Users receive notifications when a new book is added to the collection.
- **Billing Details:** The system generates billing details for purchases.
- **Admin Dashboard:** Admins have access to a dashboard and having a add books page.
- **Subscription Model:** Users can access a wide array of books through a subscriptionbased model, offering convenience and value for avid readers.**[Not fully implemented]**

## Installation

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js
- npm

### Clone the Repository

```bash
git clone https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales.git
```

### Navigate to the Project Directory

```bash
cd Online-Book-Exibition-And-Sales
```

### Frontend

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

### Backend

```bash
# Navigate to the backend directory
cd backend
OR
cd ../backend

# Install dependencies
npm install
```

## Usage

### Environment Variables

- Create a `.env` file in the root of your backend directory and add the following:

```env
PORT=your_port_number
DB=your_database_url
SALT=your_salt_value
JWT_KEY=your_jwt_secret_key
```

### Running the Application

1. **Start the Backend Server:**

   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend Development Server:**

   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.


## Screenshots
### Homepage
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/64bdeecf-ddc5-412c-bad2-949a6871d598)

### Sign-up
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/cfcbc1cf-b04c-4158-a9b7-49052fdd4f38)


### Sign-in 
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/f1e4e645-037b-42b8-87c8-30be3ae0bd78)

### Shop 
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/820a3149-7802-4fd3-b8c0-7395a2463df9)

### About
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/7850526f-2997-471a-873f-3f65572d3e01)

### Book Fair
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/b2290b3f-34ff-4777-9bfd-91dbe70de3c9)

### Subscription
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/4ba98ee1-822b-4a4f-a02c-d37811879ee4)

### Cart
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/c9755a31-c1bd-4b39-a691-848e83d44734)

### Billing page
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/ca5069d4-5e60-462f-9e22-d5c8da40abc5)

### Notification, Cart and Orders
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/900161d7-2f69-4a21-854e-49e3a2caab98)

### Admin Signin
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/cd0ab86f-0eff-494e-a7d1-3b793618eb97)

### Admin Dashboard
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/5244ef2d-ac89-4e06-bcd2-59c1c7c50df5)

### Add books
![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/809088b1-5a6c-4898-b133-108e64be0751)


## Technologies Used

- **Frontend:** React, Tailwind, Redux toolkit 
- **Backend:** Node.js, Express
- **Database:** MongoDB



## Process flow diagram

![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/02778b57-e0be-4019-9c13-e12497603727)
## Database design [NOT UPDATED]

![image](https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/8edffa41-00a7-4c71-a6fc-152647ca82a6)

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any feature you would like to add or change.

## Contact

For more information, please contact:

- **Rishabh Pandey**
- [LinkedIn](https://www.linkedin.com/in/rishabh-pandey-834964222/)
- [Gmail](mailto:rishabhpandey8092@gmail.com)


## Demo video <a href = 'https://github-production-user-asset-6210df.s3.amazonaws.com/92287287/326287516-d3774a75-f88a-4b98-ab40-d540dc37e2b8.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240428%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240428T190904Z&X-Amz-Expires=300&X-Amz-Signature=d3ff2b670069aa575331d6b9f6080e61574abac375b26e22470f003f543ac61d&X-Amz-SignedHeaders=host&actor_id=92287287&key_id=0&repo_id=792794605' > Link </a>
https://github.com/Rishabh8210/Online-Book-Exibition-And-Sales/assets/92287287/d3774a75-f88a-4b98-ab40-d540dc37e2b8


