declare namespace gapi {
    namespace auth2 {
      interface GoogleUser {
        getBasicProfile(): {
          getId(): string;
          getName(): string;
          getImageUrl(): string;
          getEmail(): string;
        };
        getAuthResponse(): {
          id_token: string;
        };
      }
      function load(name: string, callback: () => void): void;
      function init(params: {
        client_id: string;
      }): void;
      function getAuthInstance(): {
        signIn: () => Promise<GoogleUser>;
      };
    }
  }
  