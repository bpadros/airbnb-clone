import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitile="Please log in" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id
  });
  if(reservations.length === 0 ) {
    return (
        <ClientOnly>
            <EmptyState
            title="No reservatios found"
            subtitile="Looks like you have no reservatiosn on your project"
            />
        </ClientOnly>
    )
  }

  return (
    <ClientOnly>
        <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
        />
    </ClientOnly>
  )
};

export default ReservationsPage;
