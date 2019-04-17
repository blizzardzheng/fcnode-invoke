
'use strict';
import 'mocha';
import { test } from 'fc-helper';
const handlers = require('../src/handlers');
import * as assert from 'power-assert';


describe('transform', function () {
  it('should ok', async () => {
    const handler:any = test(handlers.helloworld);
    const res = await handler.run(JSON.stringify({
      str: 'hi aliyun function '
    }), '{}');
    assert(res === 'hi aliyun function hello world');
  }).timeout(50000);
});
