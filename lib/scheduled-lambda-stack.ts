import * as path from "path";

import * as cdk from '@aws-cdk/core';
import {Duration} from '@aws-cdk/core';
import {ScheduledLambda} from "./scheduled-lambda";
import * as events from "@aws-cdk/aws-events";

export class ScheduledLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ScheduledLambda(this, "DailyRandomQuote", {
      lambdaProps: {
        entry: path.join(__dirname, "..", "lambdas", "random-quote", "index.ts"),
      },
      ruleProps: {
        schedule: events.Schedule.rate(Duration.minutes(5))
      }
    });
  }
}
