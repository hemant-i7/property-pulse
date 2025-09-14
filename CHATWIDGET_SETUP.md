# PropertyPulse ChatWidget Setup Guide

## 🎉 ChatWidget Integration Complete!

The ContentPulse ChatWidget has been successfully integrated into your PropertyPulse homepage. Here's what you need to do to get it running:

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# Contentstack Configuration (Required)
NEXT_PUBLIC_CONTENTSTACK_API_KEY=your_contentstack_api_key_here
NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN=your_contentstack_delivery_token_here
NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT=development

# OpenAI Configuration (Required for ChatWidget)
NEXT_PUBLIC_OPENAI_API_KEY=sk-your_openai_api_key_here

# Optional: ContentPulse API for advanced analytics
NEXT_PUBLIC_CONTENTPULSE_API_URL=https://api.contentpulse.com
NEXT_PUBLIC_CONTENTPULSE_PROJECT_ID=your_project_id_here
```

## How to Get API Keys

### 1. Contentstack API Keys
- You likely already have these if your PropertyPulse app is working
- Check your existing environment variables or Contentstack dashboard
- Region: EU (already configured in the widget)

### 2. OpenAI API Key
- Go to [OpenAI Platform](https://platform.openai.com/api-keys)
- Create a new API key
- Add billing information if needed
- Copy the key starting with `sk-`

## Widget Features

The ChatWidget is configured specifically for PropertyPulse with:

✅ **PropertyPulse Assistant Personality**
- Expert in Mumbai real estate
- Knows about apartments, villas, penthouses
- Familiar with Mumbai neighborhoods (Juhu, Bandra, Worli, etc.)

✅ **Contentstack Integration**
- Direct access to your property database
- Can search and recommend properties
- Uses MCP (Model Context Protocol) for real-time data

✅ **Professional Theme**
- Matches PropertyPulse design system
- Blue color scheme (#3B82F6)
- Modern, professional styling

✅ **Bottom-right Positioning**
- Non-intrusive placement
- Easy access for users
- Responsive design

## Testing the Widget

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser to localhost:3000**

3. **Look for the chat widget in the bottom-right corner**

4. **Test interactions:**
   - "Show me luxury properties in Juhu"
   - "What's the price range for apartments in Bandra?"
   - "I'm looking for a 3BHK apartment"
   - "Tell me about penthouses in Worli"

## Widget Only Shows If OpenAI Key Is Present

The widget is conditionally rendered only when `NEXT_PUBLIC_OPENAI_API_KEY` is available:

```tsx
{process.env.NEXT_PUBLIC_OPENAI_API_KEY && (
  <ChatWidget {...widgetConfig} />
)}
```

This prevents errors when the API key is missing.

## Customization Options

You can modify the widget configuration in `/app/page.tsx`:

### Change Position
```tsx
position: {
  position: 'bottom-left' as const, // or 'top-right', 'top-left', 'center'
  offsetX: 20,
  offsetY: 20
}
```

### Modify Theme Colors
```tsx
theme: {
  primaryColor: '#your-brand-color',
  secondaryColor: '#your-secondary-color',
  // ... other theme options
}
```

### Update Welcome Message
```tsx
welcomeMessage: "Your custom welcome message here",
placeholder: "Your custom placeholder...",
```

### Add Analytics Tracking
```tsx
onMessageSent: (message: any) => {
  // Add your analytics tracking here
  gtag('event', 'chat_message', { message_length: message.content.length });
},
```

## Troubleshooting

### Widget Not Appearing
1. Check if `NEXT_PUBLIC_OPENAI_API_KEY` is set
2. Check browser console for errors
3. Verify the package is linked: `npm list @contentpulse/widget`

### API Errors
1. Verify OpenAI API key is correct and has billing enabled
2. Check Contentstack credentials
3. Ensure you're using the correct region (EU)

### MCP Not Working
1. Verify ContentPulse backend is running
2. Check network connectivity
3. Ensure `enableMCP: true` in config

## Next Steps

1. **Add your API keys** to `.env.local`
2. **Test the widget** with sample queries
3. **Customize the personality** and welcome message for your brand
4. **Set up analytics tracking** for insights
5. **Deploy to production** when ready

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all environment variables are correctly set
3. Test with simple queries first
4. Check the ContentPulse widget documentation

The widget will provide intelligent assistance to your PropertyPulse visitors, helping them find their dream properties in Mumbai! 🏠✨
