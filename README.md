# Schedule a Lambda

This repository is referenced and explained in my blog post [How to Run Lambda on a Schedule](https://blog.jannikwempe.com/how-to-run-lambda-on-a-schedule).

⚠️ Don't forget to destroy the stack running `npx cdk destroy` after you are done testing it. Otherwise, the Lambda will be executed every 5min.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
