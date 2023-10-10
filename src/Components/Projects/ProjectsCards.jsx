import event from '../../assets/images/Education and Training - Google Chrome 10_10_2023 10_08_06 AM.png';
import dragon from '../../assets/images/Dragon News - Google Chrome 10_10_2023 10_08_23 AM.png';
import donation from '../../assets/images/Donation- Google Chrome 10_10_2023 10_09_12 AM.png';



const ProjectsCards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-5'>
      <div className="card w-80 bg-base-100 shadow-xl border mx-auto ">
        <figure className="px-10 pt-10">
          <img
            src={event}
            alt="Event management"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Event management</h2>
          <div className="card-actions">
          <a href="https://monumental-snickerdoodle-54de10.netlify.app/"><button className="btn btn-wide">Visit</button></a>
          </div>
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl border mx-auto  ">
        <figure className="px-10 pt-10">
          <img
            src={dragon}
            alt="Dragon news"
            className=" rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Dragon news</h2>
          <div className="card-actions">
          <a href="https://vermillion-starship-43da0a.netlify.app/"><button className="btn btn-wide">Visit</button></a>
          </div>
        </div>
      </div>
      <div className="card w-80 bg-base-100 shadow-xl border mx-auto ">
        <figure className="px-10 pt-10">
          <img
            src={donation}
            alt="Donation camp"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Donation camp</h2>
          <div className="card-actions">
            <a href="https://frolicking-starship-63ea8f.netlify.app"><button className="btn btn-wide">Visit</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
