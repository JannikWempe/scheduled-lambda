import * as cdk from '@aws-cdk/core';
import {Construct} from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import {NodejsFunction, NodejsFunctionProps} from "@aws-cdk/aws-lambda-nodejs";

interface ScheduledLambdaProps {
  lambdaProps: NodejsFunctionProps;
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
  }

  private createLambda(config: ScheduledLambdaProps["lambdaProps"]) {
    return new NodejsFunction(this, "Lambda", {
      ...defaultLambdaProps,
      ...config,
    });
  }
}
