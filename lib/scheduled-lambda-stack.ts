import * as path from "path";

import * as cdk from '@aws-cdk/core';
import {ScheduledLambda} from "./scheduled-lambda";

export class ScheduledLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ScheduledLambda(this, "DailyRandomQuote", {
      lambdaProps: {
        entry: path.join(__dirname, "..", "lambdas", "random-quote", "index.ts"),
      }
    });
  }
}
