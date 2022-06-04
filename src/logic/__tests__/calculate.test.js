import calculate from '../calculate';

describe('Should return', () => {
  it('Empty object', () => {
    expect(calculate({ total: '40', next: null, operation: '+' }, '='))
      .toEqual({});
  });

  it('next with opposite math sign ', () => {
    expect(calculate({ total: null, next: '5', operation: null }, '+/-'))
      .toEqual({ total: null, next: '-5', operation: null });
  });

  it('operate with button name ', () => {
    expect(calculate({ total: '15', next: null, operation: null }, '÷'))
      .toEqual({ total: '15', next: null, operation: '÷' });
  });

  it('Clear all values ', () => {
    expect(calculate({ total: '2', next: '6', operation: null }, 'AC'))
      .toEqual({ total: null, next: null, operation: null });
  });

  it('Add point to number', () => {
    expect(calculate({ total: '8', next: null, operation: null }, '.'))
      .toEqual({ total: '8', next: '8.', operation: null });
  });
});
