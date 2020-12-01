import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <span className="navbar-brand mb-0 h1">Forum de discussion</span>
      </nav>

      <div className="container-fluid">
        <div className="container">
          <div className="wrapper">
            <div className="messages-container"></div>
          </div>
        </div>

        <div className="card text-white bg-dark my-3 fixed-bottom">
          <div className="card-body">
            <form id="form-send">
              <div className="form-group">
                <label>Username</label>
                <input
                  className="form-control"
                  type="text"
                  id="author"
                  name="username"
                  placeholder="Votre nom..."
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <input
                  className="form-control"
                  type="text"
                  id="msg"
                  name="message"
                  placeholder="Votre message..."
                />
              </div>

              <button className="btn btn-primary btn-block" type="submit">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
