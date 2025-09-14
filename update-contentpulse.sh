#!/bin/bash

# ContentPulse Widget - Contentstack Integration Update Script
# This script updates your existing installation with improved Contentstack content access

echo "🚀 ContentPulse Widget - Contentstack Integration Update"
echo "======================================================"

# Check if we're in the right directory
if [ ! -f "packages/contentpulse-widget/package.json" ]; then
    echo "❌ Error: Please run this script from the ContentPulse project root directory"
    exit 1
fi

# Get target project path
read -p "📁 Enter the path to your project with the widget: " TARGET_PATH

if [ ! -d "$TARGET_PATH" ]; then
    echo "❌ Error: Target directory does not exist: $TARGET_PATH"
    exit 1
fi

echo "📦 Updating ContentPulse widget in: $TARGET_PATH"

# Navigate to target project
cd "$TARGET_PATH"

# Check if package is installed
if ! npm list @contentpulse/widget > /dev/null 2>&1; then
    echo "❌ Error: @contentpulse/widget is not installed in this project"
    echo "Please install it first using the npm installation guide"
    exit 1
fi

echo "✅ Found @contentpulse/widget installation"

# Uninstall old version
echo "🗑️  Uninstalling old version..."
npm uninstall @contentpulse/widget

# Install updated version
echo "📦 Installing updated version with improved Contentstack integration..."
npm install /Users/hemantkadam/MERN/ContentPulse/packages/contentpulse-widget/contentpulse-widget-1.0.0.tgz

# Check installation
if npm list @contentpulse/widget > /dev/null 2>&1; then
    echo "✅ Update successful!"
    echo ""
    echo "🎯 What's New:"
    echo "- ✅ Now fetches actual content entries from Contentstack"
    echo "- ✅ Improved content search and filtering"
    echo "- ✅ Better context provided to AI"
    echo "- ✅ Enhanced system prompts for content-aware responses"
    echo ""
    echo "🧪 Test Questions to Try:"
    echo "1. 'What content do you have available?'"
    echo "2. 'Tell me about [specific item from your content]'"
    echo "3. 'What are the prices for [your products/services]?'"
    echo "4. 'Where is [your business/location]?'"
    echo ""
    echo "🔍 Debugging:"
    echo "- Check browser console for 'Contentstack data fetched successfully'"
    echo "- Verify your Contentstack API credentials are correct"
    echo "- Ensure your content is published in the correct environment"
    echo ""
    echo "📚 For detailed troubleshooting, see:"
    echo "   /Users/hemantkadam/MERN/ContentPulse/CONTENTSTACK_TROUBLESHOOTING.md"
    echo ""
    echo "🎉 Your chatbot should now properly access your Contentstack content!"
else
    echo "❌ Update failed. Please check the error messages above."
    exit 1
fi
