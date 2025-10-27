# 🚀 Local Development Setup Guide

This guide will help you set up the OSL VVCE website project locally on your machine for development and contribution.

## ✨ Cross-Platform Compatibility

This project is designed to work seamlessly on both **Windows** and **Linux/macOS**. All npm scripts use `cross-env` to ensure environment variables work correctly across different operating systems.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### For Windows Users

1. **Git for Windows**
   - Download from: https://git-scm.com/download/win
   - During installation, select "Git Bash Here" option

2. **Node.js and npm**
   - **Required Version**: Node.js 14.x or 16.x (recommended: 16.20.2)
   - **NPM Version**: 8.x or higher
   - Download from: https://nodejs.org/en/download/
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

3. **Code Editor** (recommended)
   - Visual Studio Code: https://code.visualstudio.com/

### For Linux Users

1. **Git**
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install git

   # CentOS/RHEL/Fedora
   sudo yum install git  # or dnf for newer versions
   ```

2. **Node.js and npm**
   
   **Option 1: Using NodeSource Repository (Recommended)**
   ```bash
   # Ubuntu/Debian
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # CentOS/RHEL/Fedora
   curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
   sudo yum install nodejs npm  # or dnf
   ```

   **Option 2: Using NVM (Node Version Manager)**
   ```bash
   # Install NVM
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   
   # Restart terminal or run:
   source ~/.bashrc
   
   # Install Node.js 16
   nvm install 16.20.2
   nvm use 16.20.2
   nvm alias default 16.20.2
   ```

3. **Verify Installation**
   ```bash
   node --version  # Should show v16.x.x
   npm --version   # Should show 8.x.x or higher
   ```

## 🛠️ Project Setup

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/osl-vvce/osl-vvce.github.io.git

# Navigate to the project directory
cd osl-vvce.github.io
```

### 2. Install Dependencies

```bash
# Install all project dependencies
npm install
```

**Note**: If you encounter any issues during installation, try:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json  # Linux/macOS
# For Windows: rmdir /s node_modules & del package-lock.json

# Reinstall dependencies
npm install
```

### 3. Environment Setup

The project uses specific Node.js options for legacy OpenSSL support. All npm scripts are configured with `cross-env` for cross-platform compatibility, so they work seamlessly on both Windows and Linux/macOS.

### 4. Start Development Server

```bash
# Start the development server
npm run develop
# or
npm start
```

The site will be available at: `http://localhost:8000`

**Note**: The first time you run the development server, Gatsby will automatically generate TypeScript definitions for your GraphQL queries in `__generated__/` folders. These files are auto-generated and should not be committed to git.

### 5. GraphQL Playground (Optional)

GraphQL playground will be available at: `http://localhost:8000/___graphql`

## 🏗️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run develop` | Same as start (alias) |
| `npm run build` | Build the project for production |
| `npm run serve` | Serve the production build locally |
| `npm run clean` | Clean Gatsby cache and public folder |
| `npm run format` | Format code using Prettier |

## 🔧 Project Structure

```
osl-vvce.github.io/
├── contents/              # MDX content files
│   ├── blog/             # Blog posts
│   ├── events/           # Event pages
│   ├── member/           # Member profiles
│   └── portfolio/        # Portfolio items
├── src/
│   ├── components/       # React components
│   ├── pages/           # Gatsby pages
│   ├── templates/       # Page templates
│   ├── style/          # CSS files
│   └── utils/          # Utility functions
├── static/             # Static assets
├── public/             # Generated build files (auto-generated)
├── gatsby-config.ts    # Gatsby configuration
├── gatsby-node.ts      # Gatsby Node APIs
└── package.json        # Dependencies and scripts
```

## 🎨 Key Technologies

- **Gatsby**: React-based static site generator
- **React**: 16.14.0
- **TypeScript**: 3.8.3
- **Tailwind CSS**: 1.9.6
- **MDX**: For content management
- **GraphQL**: For data querying
- **cross-env**: Cross-platform environment variable handling

## 🐛 Troubleshooting

### Common Issues and Solutions

1. **Node.js Version Conflicts**
   ```bash
   # Check current Node version
   node --version
   
   # If using NVM, switch to Node 16
   nvm use 16.20.2
   ```

2. **OpenSSL Legacy Provider Issues**
   - The project uses `cross-env` with `NODE_OPTIONS="--openssl-legacy-provider"` for cross-platform compatibility
   - All npm scripts work seamlessly on Windows, Linux, and macOS

3. **Port Already in Use**
   ```bash
   # Kill process using port 8000
   # Linux/macOS
   lsof -ti:8000 | xargs kill -9
   
   # Windows Command Prompt
   netstat -ano | findstr :8000
   taskkill /PID <PID> /F
   
   # Windows PowerShell
   Get-Process -Id (Get-NetTCPConnection -LocalPort 8000).OwningProcess | Stop-Process
   ```

4. **Sharp Installation Issues**
   ```bash
   # Reinstall sharp (image processing library)
   npm uninstall sharp
   npm install sharp
   ```

5. **Windows Long Path Issues**
   
   If you encounter path-related errors on Windows:
   ```bash
   # Enable long paths in Windows (Run as Administrator)
   git config --system core.longpaths true
   ```

6. **Cache Issues**
   ```bash
   # Clear Gatsby cache
   npm run clean
   
   # Clear npm cache
   npm cache clean --force
   
   # Windows: Delete node_modules manually if needed
   rmdir /s /q node_modules
   del package-lock.json
   npm install
   ```

## 📝 Contributing Guidelines

### Before Making Changes

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style
   - Test your changes locally
   - Ensure the build passes

3. **Format your code**
   ```bash
   npm run format
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Add: your meaningful commit message"
   git push origin feature/your-feature-name
   ```

### Content Guidelines

- **Blog posts**: Add to `contents/blog/your-post-name/index.mdx`
- **Member profiles**: Add to `contents/member/your-name/index.mdx`
- **Events**: Add to `contents/events/event-name/index.mdx`

### Code Style

- Use TypeScript for new components
- Follow React functional component patterns
- Use Tailwind CSS for styling
- Ensure responsive design

## 🆘 Getting Help

If you encounter any issues:

1. Check this setup guide first
2. Search existing [GitHub Issues](https://github.com/osl-vvce/osl-vvce.github.io/issues)
3. Create a new issue with:
   - Your operating system
   - Node.js and npm versions
   - Error messages (if any)
   - Steps to reproduce

## 📞 Contact

- **GitHub**: [osl-vvce](https://github.com/osl-vvce)
- **Email**: osl@vvce.ac.in
- **Twitter**: [@osl_vvce](https://twitter.com/osl_vvce)

---

Happy Contributing! 🎉