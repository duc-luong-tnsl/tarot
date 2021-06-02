export default function ContentFactory(screen, lang = 'vi') {

    const data = {
      onBoarding: {
          'vi': {
            askName: 'Hãy chia sẽ một chút về bạn',
            askNameForm: 'Tên của bạn',
            askDOB: 'Ngày sinh',
            askGender: 'Giới tính của bạn',
            askExpectedPartner: 'Bạn muốn gặp ....',
            askRelationshipStyle: 'Bạn đang tìm kiếm mối quan hệ',
            askLocation: 'Cài đặt vị trí hiện tại của bạn'
          }
      }
    }

    return data[screen][lang]
}