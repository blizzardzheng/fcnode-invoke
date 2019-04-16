import helloworld from './helloworld';
import connect from 'fc-helper-connect';

connect({
  async getHelloWorld(query) {
    const res = await helloworld(query);
    return res;
  }
})(exports)
