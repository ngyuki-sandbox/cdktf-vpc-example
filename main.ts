import { Construct } from 'constructs';
import { App, TerraformStack, Token } from 'cdktf';
import { AwsProvider, Vpc, Subnet } from './.gen/providers/aws'

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, 'aws', {
      region: 'ap-northeast-1',
    });

    const vpc = new Vpc(this, 'myvpc', {
      cidrBlock: '10.0.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
    });

    new Subnet(this, 'subnet', {
      vpcId: Token.asString(vpc.id),
      cidrBlock: `10.0.0.0/24`,
    });
  }
}

const app = new App();
new MyStack(app, 'cdktf-vpc-example');
app.synth();
