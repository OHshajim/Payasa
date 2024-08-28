const Interface = () => {
  return (
    <div className="flex justify-between items-center container mx-auto">
      <div className="border">
        <img src="https://i.ibb.co/6gR6rQ6/Shajim.png" alt="Admin" className="rounded-full ring-4 ring-green-600 "/>
      </div>
      <div className="flex flex-col justify-start border">
        <h3 className="text-3xl flex justify-start">Welcome to the Admin Dashboard!</h3>
        <p>Manage your content, monitor user activity, and oversee all operations from one place.</p>
      </div>
    </div>
  );
};

export default Interface;
