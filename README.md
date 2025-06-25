# Sui React JavaScript

A modern React JavaScript scaffold for building decentralized applications on the Sui blockchain using Vite.

## ✨ Features

- ⚡ **Vite** for lightning-fast development
- 🟨 **JavaScript** with modern ES6+ features
- ⚛️ **React 18** with modern hooks
- 💼 **Wallet Integration** with @mysten/dapp-kit
- 🔗 **Smart Contract Integration** template
- 🎨 **Modern UI** with Tailwind CSS
- 📱 **Responsive Design**
- 🧭 **React Router** for navigation
- 🚀 **Easy Setup** - no TypeScript complexity

## 🚀 Quick Start

\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd react-sui-javascript

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Open [http://localhost:5173](http://localhost:5173) to see your app.

## 📁 Project Structure

\`\`\`
├── src/
│   ├── components/            # React components
│   ├── lib/smart-contract/    # Smart contract integration
│   │   ├── config.json        # Contract addresses
│   │   ├── client-transactions.js  # Transaction builders
│   │   ├── queries.js         # Read-only queries
│   │   ├── utils.js           # Utility functions
│   │   └── index.js           # Main exports
│   ├── pages/                 # Page components
│   ├── providers/             # React context providers
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
└── vite.config.js             # Vite configuration
\`\`\`

## 🔧 Smart Contract Integration

### 1. Deploy Your Contract

\`\`\`bash
# Deploy to devnet
sui client publish --gas-budget 100000000
\`\`\`

### 2. Update Configuration

Edit \`src/lib/smart-contract/config.json\`:

\`\`\`json
{
  "PACKAGE_ID": "0x_YOUR_PACKAGE_ID_HERE",
  "ADMIN_CAP": "0x_YOUR_ADMIN_CAP_HERE",
  "SHARED_OBJECT": "0x_YOUR_SHARED_OBJECT_HERE"
}
\`\`\`

### 3. Create Transaction Builders

Update \`src/lib/smart-contract/client-transactions.js\`:

\`\`\`javascript
export const clientTransactions = {
  createItem: (name, description, price) => {
    const transaction = new Transaction()
    transaction.moveCall({
      target: \`\${PACKAGE_ID}::your_module::create_item\`,
      arguments: [
        transaction.object(SHARED_OBJECT),
        transaction.pure.string(name),
        transaction.pure.string(description),
        transaction.pure.u64(price),
      ],
    })
    return transaction
  }
}
\`\`\`

## 🔑 Environment Variables

Create a \`.env.local\` file:

\`\`\`bash
# Optional: For read-only queries
VITE_QUERY_PRIVATE_KEY=your_private_key_here
\`\`\`

## 📦 Key Dependencies

- **@mysten/dapp-kit**: Sui wallet integration
- **@mysten/sui**: Sui JavaScript SDK
- **@tanstack/react-query**: State management for async operations
- **react**: React framework
- **react-router-dom**: Client-side routing
- **vite**: Build tool and dev server
- **tailwindcss**: Utility-first CSS framework

## 🎯 Usage in Components

\`\`\`javascript
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit'
import { createItem, getItemInfo } from '@/lib/smart-contract'

// In your component
const { mutate: signAndExecute } = useSignAndExecuteTransaction()

const handleCreate = async () => {
  const transaction = await createItem('Item Name', 'Description', 1000000000)
  
  signAndExecute(
    { transaction },
    {
      onSuccess: () => console.log('Success!'),
      onError: (error) => console.error('Error:', error),
    }
  )
}
\`\`\`

## 🛠️ Development Scripts

\`\`\`bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

### Netlify

\`\`\`bash
# Build the project
npm run build

# Deploy the dist folder to Netlify
\`\`\`

### Other Platforms

The app can be deployed to any static hosting platform:

- **GitHub Pages**: Use \`npm run build\` and deploy the \`dist\` folder
- **Railway**: Connect your GitHub repository
- **DigitalOcean**: Use App Platform with Node.js buildpack

## 🟨 JavaScript Benefits

- **Simple Setup**: No TypeScript configuration needed
- **Fast Development**: Write code without type annotations
- **Easy Learning**: Perfect for developers new to blockchain
- **Flexible**: Add TypeScript later if needed
- **Modern Features**: ES6+ syntax with Vite

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [Sui Website](https://sui.io/)
- [Sui Discord](https://discord.com/invite/Sui)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

---

**Built with ❤️ for the Sui ecosystem**
\`\`\`

Perfect! I've successfully converted the React TypeScript project to a pure React JavaScript project. Here are the key changes:

## 🔄 **Major Changes:**

### **Removed TypeScript:**
- All `.ts` and `.tsx` files converted to `.js` and `.jsx`
- Removed TypeScript dependencies and configuration
- Removed all type annotations and interfaces
- Updated ESLint configuration for JavaScript

### **Simplified Configuration:**
- **vite.config.js** - No TypeScript plugin needed
- **eslint.config.js** - JavaScript-focused rules
- **package.json** - Removed TypeScript dependencies

### **JavaScript Features:**
- Modern ES6+ syntax maintained
- JSDoc comments for documentation (optional)
- Simplified imports and exports
- No type checking overhead

## ⚡ **Benefits of React JavaScript:**

1. **Faster Setup** - No TypeScript compilation
2. **Easier Learning** - Perfect for beginners
3. **Rapid Prototyping** - Write code faster
4. **Smaller Bundle** - No TypeScript overhead
5. **Flexible** - Can add TypeScript later if needed

## 🚀 **Ready to Use:**

- All smart contract integration preserved
- Wallet connectivity maintained
- Modern React patterns
- Responsive design
- Component modularity
- Error handling for missing environment variables

The project is now a pure React JavaScript application that's perfect for developers who want to build Sui dApps without TypeScript complexity! 🎉
