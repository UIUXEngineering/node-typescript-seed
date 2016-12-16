/// <reference path='../tools/manual_typings/project/jasmine.d.ts' />

import { Demo, create } from './index';

describe('Index file should contain all methods', function() {

  it('should contain Demo', function() {
    expect(Demo).toBeDefined();
  });

  it('should contain create', function() {
    expect(create).toBeDefined();
  });

});
