  export default function Footer() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
      <>
        <section>
          <div className="px-5">
            <div className="bg-secondary" style={{ height: "1px" }}></div>
          </div>
          <div className="text-center text-muted d-flex flex-column flex-md-row  justify-content-between align-items-center my-3 mx-md-3  ml-md-4 ml-lg-0">
           <p className="mb-0">
           © {currentYear} · Helix · All rights reserved
           </p>
          </div>
        </section>
      </>
    );
  }
  