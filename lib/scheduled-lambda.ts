import * as cdk from '@aws-cdk/core';
import {Construct} from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import {NodejsFunction, NodejsFunctionProps} from "@aws-cdk/aws-lambda-nodejs";
import * as events from "@aws-cdk/aws-events";
import * as targets from "@aws-cdk/aws-events-targets";

// no targets, because the lambda is the only target
interface RuleProps extends Omit<events.RuleProps, "targets"> {
  // schedule is always required instead of optional
  schedule: events.Schedule;
}

interface ScheduledLambdaProps {
  lambdaProps: NodejsFunctionProps;
  ruleProps: RuleProps;
}

const defaultLambdaProps: Partial<NodejsFunctionProps> = {
  handler: 'handler',
  memorySize: 128,
  runtime: lambda.Runtime.NODEJS_14_X,
}

export class ScheduledLambda extends cdk.Construct {
  lambda: NodejsFunction;

  constructor(scope: Construct, id: string, props: ScheduledLambdaProps) {
    super(scope, id);

    this.lambda = this.createLambda(props.lambdaProps);
    this.scheduleLambda(props.ruleProps);
  }

  private createLambda(config: ScheduledLambdaProps["lambdaProps"]) {
    return new NodejsFunction(this, "Lambda", {
      ...defaultLambdaProps,
      ...config,
    });
  }

  private scheduleLambda(ruleConfig: RuleProps) {
    const rule = new events.Rule(this, 'Schedule', ruleConfig);
    rule.addTarget(new targets.LambdaFunction(this.lambda));
  }
}
