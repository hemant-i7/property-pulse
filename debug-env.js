// Debug script to check environment variables
console.log('🔍 ContentPulse Widget Environment Debug Check\n');

const requiredVars = [
  'NEXT_PUBLIC_CONTENTSTACK_API_KEY',
  'NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN', 
  'NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT',
  'NEXT_PUBLIC_CONTENTSTACK_REGION'
];

const optionalVars = [
  'NEXT_PUBLIC_LLM_PROVIDER',
  'NEXT_PUBLIC_LLM_API_KEY',
  'NEXT_PUBLIC_LLM_MODEL'
];

console.log('✅ Required Variables (for widget to appear):');
requiredVars.forEach(varName => {
  const value = process.env[varName];
  const status = value ? '✅ SET' : '❌ MISSING';
  const displayValue = value ? (varName.includes('KEY') || varName.includes('TOKEN') ? `${value.substring(0, 10)}...` : value) : 'undefined';
  console.log(`  ${varName}: ${status} (${displayValue})`);
});

console.log('\n🤖 Optional Variables (for AI functionality):');
optionalVars.forEach(varName => {
  const value = process.env[varName];
  const status = value ? '✅ SET' : '⚠️  NOT SET';
  const displayValue = value ? (varName.includes('KEY') ? `${value.substring(0, 10)}...` : value) : 'undefined';
  console.log(`  ${varName}: ${status} (${displayValue})`);
});

// Check for common issues
console.log('\n🔍 Common Issues Check:');

if (!process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY) {
  console.log('❌ Missing CONTENTSTACK_API_KEY - Widget will show configuration error');
}

if (!process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN) {
  console.log('❌ Missing CONTENTSTACK_DELIVERY_TOKEN - Widget cannot access content');
}

if (!process.env.NEXT_PUBLIC_CONTENTSTACK_REGION) {
  console.log('⚠️  Missing CONTENTSTACK_REGION - Will default to US region');
} else if (process.env.NEXT_PUBLIC_CONTENTSTACK_REGION !== 'eu') {
  console.log('⚠️  Region is not "eu" - Your PropertyPulse is configured for EU region');
}

if (!process.env.NEXT_PUBLIC_LLM_API_KEY) {
  console.log('⚠️  Missing LLM_API_KEY - Widget will work but without AI responses');
}

console.log('\n📋 Next Steps:');
const missingRequired = requiredVars.filter(varName => !process.env[varName]);
if (missingRequired.length > 0) {
  console.log('❌ Add these required variables to .env.local:');
  missingRequired.forEach(varName => {
    console.log(`  ${varName}=your_value_here`);
  });
} else {
  console.log('✅ All required variables are set!');
  if (!process.env.NEXT_PUBLIC_LLM_API_KEY) {
    console.log('💡 Add OpenAI API key for AI functionality:');
    console.log('  NEXT_PUBLIC_LLM_PROVIDER=openai');
    console.log('  NEXT_PUBLIC_LLM_API_KEY=sk-your-key-here');
    console.log('  NEXT_PUBLIC_LLM_MODEL=gpt-4');
  }
}
