# 🚀 PropertyPulse ContentPulse Widget Setup Guide

## 🔧 Configuration Error Fix

You're seeing the "⚠️ Configuration Error - No configuration found" because the ContentPulse widget needs environment variables to be configured.

## 📝 Step 1: Create Environment Variables

Create a `.env.local` file in your project root with the following configuration:

```bash
# Copy this content to .env.local (create the file if it doesn't exist)

# Contentstack Configuration (Required)
NEXT_PUBLIC_CONTENTSTACK_API_KEY=your_contentstack_api_key_here
NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN=your_contentstack_delivery_token_here
NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT=development
NEXT_PUBLIC_CONTENTSTACK_REGION=eu

# LLM Configuration (Required for AI functionality)
NEXT_PUBLIC_LLM_PROVIDER=openai
NEXT_PUBLIC_LLM_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_LLM_MODEL=gpt-4
```

## 🔑 Step 2: Get Your API Keys

### Contentstack API Keys (You may already have these)
1. **Check your existing project** - You likely already have these since PropertyPulse is working
2. **From Contentstack Dashboard**:
   - API Key: Found in Settings > Stack Settings
   - Delivery Token: Found in Settings > Tokens
   - Environment: Usually `development` or `production`
   - Region: `eu` (as configured in your project)

### OpenAI API Key (Required for AI Chat)
1. **Go to OpenAI Platform**: https://platform.openai.com/api-keys
2. **Create a new API key**
3. **Add billing information** if not already done
4. **Copy the key** (starts with `sk-`)

## 🚀 Step 3: Quick Setup Commands

```bash
# Create .env.local file
touch .env.local

# Edit the file and add your configuration
# Replace the placeholder values with your actual API keys
```

## 🎯 Step 4: Test Configuration

After adding your environment variables:

1. **Restart your development server**:
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

2. **Check the widget**:
   - The configuration error should disappear
   - You should see the PropertyPulse Assistant
   - Try sending a test message

## 🔍 Step 5: Verify Configuration

The widget will show different states based on your configuration:

### ✅ **Fully Configured** (All env vars set)
- Blue chat button in bottom-right
- PropertyPulse Assistant ready
- AI-powered responses

### ⚠️ **Partially Configured** (Missing OpenAI key)
- Widget appears but with limited functionality
- Can show property information but no AI responses

### ❌ **Not Configured** (Missing Contentstack keys)
- Orange warning button appears
- "Configuration needed" message

## 🛠️ Alternative: Use ContentPulse Setup Wizard

If you prefer a guided setup:

```bash
# Run the interactive setup wizard
npx contentpulse-setup
```

The wizard will:
- Guide you through Contentstack authentication
- Help configure your LLM provider
- Set up PropertyPulse-specific customizations
- Generate the environment variables automatically

## 📊 Expected Result

Once configured, you should see:

1. **PropertyPulse Assistant** in bottom-right corner
2. **Professional blue design** matching your site
3. **Mumbai real estate expertise** in responses
4. **Property-specific welcome message**
5. **Integration with your Contentstack data**

## 🚨 Troubleshooting

### Configuration Error Persists
```bash
# Check if .env.local exists and has content
ls -la .env.local
cat .env.local

# Restart development server
npm run dev
```

### API Key Issues
- **Contentstack**: Verify region is set to `eu`
- **OpenAI**: Ensure billing is set up and key is active
- **Environment**: Check all values are properly quoted if they contain spaces

### Widget Not Appearing
```bash
# Verify package is installed
npm list @contentpulse/widget

# Check for console errors in browser
# F12 -> Console tab
```

## 📱 Production Deployment

For production deployment:

1. **Add environment variables** to your hosting platform (Vercel, Netlify, etc.)
2. **Change environment** from `development` to `production`
3. **Use production Contentstack tokens**
4. **Test thoroughly** before going live

## 🎉 Success Indicators

You'll know everything is working when:

- ✅ No configuration errors
- ✅ Widget appears in bottom-right corner
- ✅ PropertyPulse branding and messaging
- ✅ AI responses to property queries
- ✅ Integration with your Contentstack content
- ✅ Professional appearance matching your site

## 📞 Need Help?

If you encounter issues:

1. **Check browser console** for error messages
2. **Verify all environment variables** are set correctly
3. **Test API keys** individually
4. **Restart development server** after changes
5. **Check ContentPulse documentation** for additional guidance

---

**Your PropertyPulse Assistant is ready to help users find their dream properties in Mumbai! 🏠✨**
