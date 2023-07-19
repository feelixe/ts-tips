// Define an interface that represents a Session.
interface Session {
  id: string;
}

// Define a Client class.
export class Client {
  // Property `session` is initially set to null. It can either be null or an object that matches the Session interface.
  public session: Session | null = null;

  // A dummy method to authenticate.
  public authenticate() {
    this.session = { id: 'abc' };
  }

  // The `assertIsAuthenticated` method is used to assert if the client's session is not null.
  // If the session is not null, it asserts that `this` is an instance of Client and it has a `session` property of type Session.
  private assertIsAuthenticated(): asserts this is { session: Session } {
    // If the session is null, it throws an error 'Not authenticated'.
    if (this.session === null) {
      throw new Error('Not authenticated');
    }
  }

  // `someMethod` is a public method. It first checks the `session` property,
  // then it calls the `assertIsAuthenticated` method to ensure the session is not null.
  // After the session is verified to be not null, it checks the `session` property again.
  public getTodoList() {
    this.session;
    this.assertIsAuthenticated();
    // After calling this, we're sure that session is not null, if it was null, an error would have been thrown.
    this.session;
    return [{ id: 1, text: '123' }];
  }
}
