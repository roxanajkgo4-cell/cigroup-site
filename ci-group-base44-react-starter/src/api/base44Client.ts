// JavaScript Example: Reading Entities
// Filterable fields: company_name, contact_name, email, phone, pack_selected, accelerated_delivery, message, selected_timeslot_id, meeting_date, zoom_link, status
async function fetchConsultationRequestEntities() {
    const response = await fetch(`https://app.base44.com/api/apps/68f62e8256237e5074a9c135/entities/ConsultationRequest`, {
        headers: {
            'api_key': '1c4d0a1da17f4c9e8b2c22a984cf1f0d', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

// JavaScript Example: Updating an Entity
// Filterable fields: company_name, contact_name, email, phone, pack_selected, accelerated_delivery, message, selected_timeslot_id, meeting_date, zoom_link, status
async function updateConsultationRequestEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/68f62e8256237e5074a9c135/entities/ConsultationRequest/${entityId}`, {
        method: 'PUT',
        headers: {
            'api_key': '1c4d0a1da17f4c9e8b2c22a984cf1f0d', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
    const data = await response.json();
    console.log(data);
}
