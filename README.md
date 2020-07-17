# cdktf-vpc-example

```sh
cdktf init --template=typescript

du -sh .
# 284M    .

du -sh .terraform/ node_modules/
# 151M    .terraform/
# 126M    node_modules/

npm uninstall --save typescript
npm uninstall --save cdktf-cli

du -sh .terraform/ node_modules/
# 151M    .terraform/
# 1.4M    node_modules/
```
