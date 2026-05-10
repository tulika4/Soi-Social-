const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  if (!selectedRoomData) return;

  setIsSubmitting(true);
  try {
    const sb = getSupabase() as any;
    const { data, error } = await sb
      .from('booking') // Singular table name
      .insert([
        {
          guest_name: customerName, // Updated column
          email: customerEmail,     // Updated column
          room: selectedRoomData.name, // Updated column
          check_in: '2024-05-12',   // Formatted date
          check_out: '2024-05-15',  // Formatted date
          guests: 1                 // Integer type
        }
      ])
      .select();

    if (error) throw error;
    
    setBookingRef(data[0].id);
    nextStep();
  } catch (error) {
    console.error('Error submitting booking:', error);
    alert('Failed to submit booking. Check console for details.');
  } finally {
    setIsSubmitting(false);
  }
};
