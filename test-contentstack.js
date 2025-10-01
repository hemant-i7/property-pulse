const Contentstack = require('contentstack');

// Initialize Contentstack with EU region using updated credentials
const Stack = Contentstack.Stack(
  'blt531c73cf4cc67a99',
  'cs5417e74462aca63580aa351c',
  'development'
);

// Set the region to EU since your stack is in EU region
Stack.setHost('eu-api.contentstack.com');

async function testContentstackConnection() {
  try {
    console.log('Testing Contentstack connection...');
    
    const Query = Stack.ContentType('properties').Query();
    const result = await Query.toJSON().find();
    const properties = result[0] || [];
    
    console.log(`✅ Successfully fetched ${properties.length} properties from Contentstack`);
    console.log('\nFirst 5 properties:');
    properties.slice(0, 5).forEach((property, index) => {
      console.log(`${index + 1}. ${property.title} - ${property.price} - ${property.location}`);
    });
    
    return properties;
  } catch (error) {
    console.error('❌ Error fetching properties:', error);
    throw error;
  }
}

// Run the test
testContentstackConnection()
  .then(() => {
    console.log('\n✅ Contentstack connection test completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Contentstack connection test failed:', error);
    process.exit(1);
  });
