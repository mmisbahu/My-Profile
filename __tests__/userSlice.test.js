import userSlice, { signUp, signIn, logout } from '../src/store/slices/userSlice';

describe('userSlice', () => {
  const initialState = {
    user: null,
    loading: false,
    error: null,
  };

  it('should return the initial state', () => {
    expect(userSlice.reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle signUp.pending', () => {
    const action = { type: signUp.pending.type };
    const state = userSlice.reducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle signUp.fulfilled', () => {
    const mockUser = { email: 'test@example.com' };
    const action = { type: signUp.fulfilled.type, payload: mockUser };
    const state = userSlice.reducer({ ...initialState, loading: true }, action);
    expect(state.loading).toBe(false);
    expect(state.user).toEqual(mockUser);
  });

  it('should handle signUp.rejected', () => {
    const errorMessage = 'Signup failed';
    const action = { type: signUp.rejected.type, payload: errorMessage };
    const state = userSlice.reducer({ ...initialState, loading: true }, action);
    expect(state.loading).toBe(false);
    expect(state.error).toEqual(errorMessage);
  });
});