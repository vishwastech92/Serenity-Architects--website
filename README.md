# Serenity Architects - Production Ready

Bespoke construction and interior design website built with React, Vite, and Tailwind CSS.

## 🚀 Deployment Instructions for Hostinger

### 1. Build the Project
First, generate the production build on your local machine:
```bash
npm run build
```
This will create a `dist/` folder.

### 2. Upload to Hostinger
Upload all contents of the `dist/` folder to your Hostinger `public_html` directory via File Manager or FTP.

### 3. Configure Email (SMTP)
Open `send-email.php` in your Hostinger File Manager and update the following variables with your Hostinger Email details:
- `$smtp_user`: Your full Hostinger email address.
- `$smtp_pass`: Your email password.

The script is already configured to send leads to `vishwasrj@gmail.com`.

### 4. Direct Edits (config.json)
You can change the phone numbers, email, address, and SEO titles without touching the code. Just edit `config.json` in the root of your deployment.

## 🛠 Features
- **Dynamic Config**: All business data managed via `config.json`.
- **PHP Email Integration**: Connects forms to Hostinger SMTP.
- **Responsive Design**: Optimized for mobile and desktop.
- **Service Pages**: Dedicated sections for Residential, Green Homes, and Interiors.
- **Stage-wise Payments**: Transparent payment tracking built into the process.

## 📦 Tech Stack
- React 18
- Vite
- Tailwind CSS
- Lucide Icons
- Framer Motion
