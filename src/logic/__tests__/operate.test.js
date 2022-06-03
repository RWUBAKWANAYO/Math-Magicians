import operate from '../operate';

describe('operate should return', () => {
  it('Object of null', () => {
    const obj = { total: '20', next: '10', operation: 'x' };
    expect(operate(obj.total, obj.next, obj.operation))
      .toEqual('200');
  });
  it('Error', () => {
    const obj = { total: '20', next: '0', operation: '÷' };
    expect(operate(obj.total, obj.next, obj.operation))
      .toEqual("Can't divide by 0.");
  });
  it('Error', () => {
    const obj = { total: '20', next: '0', operation: '%' };
    expect(operate(obj.total, obj.next, obj.operation))
      .toEqual("Can't find modulo as can't divide by 0.");
  });
  it('Error', () => {
    const obj = { total: '20', next: '0', operation: '?' };
    expect(() => operate(obj.total, obj.next, obj.operation))
      .toThrow(`Unknown operation '${obj.operation}'`);
  });
});
