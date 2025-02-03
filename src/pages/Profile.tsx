
function Profile(): JSX.Element {
  // TODO: Fetch user data from AWS Cognito or your DB once logged in
  const userName = "Jane Doe"; // placeholder
  const userEmail = "jane@example.com"; // placeholder

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 bg-white shadow">
      <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
      <p><strong>Name:</strong> {userName}</p>
      <p><strong>Email:</strong> {userEmail}</p>
      {/* In the future, you can add an edit profile form, change password, etc. */}
    </div>
  );
}

export default Profile;
