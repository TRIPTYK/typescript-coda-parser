import { createApplication } from '../src/application';

test('should echo the application init', async () => {
  expect(createApplication()).toStrictEqual('Application is created');
})
