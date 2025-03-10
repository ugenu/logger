import assert from 'assert';

import { Logger } from "../../src/logger";

describe("LOGGER", function(){
  it('should log all the things', function(){
    let logger = Logger(['@ugenu.io', 'logger', 'test'], 'silly');

    logger.error('THIS IS AN ERROR MESSAGE %o', {lol: 'apple'});
    logger.warn('THIS IS A WARNING');
    logger.info('THIS IS INFO');
    logger.http('THIS IS FOR HTTP REQUESTS');
    logger.verbose('THIS IS VERBOSE');
    logger.debug('THIS IS A DEBUG');
    logger.silly('IM SO SILLY');
  });
});