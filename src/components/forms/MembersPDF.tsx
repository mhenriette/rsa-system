import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const MembersPDF = ({ members }: any) => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.page}>
          <Text style={styles.title}>Rwanda Scouts Association</Text>
          {/* Add other PDF content here */}
          {members.map((member) => (
            <View key={member.id} style={styles.member}>
              <Text>{`${member.First_name} ${member.last_name}`}</Text>
              <Text>{member.email}</Text>
              <Text>{member.contact}</Text>
              <Text>{member.district}</Text>
              <Text>{member.unit_name}</Text>
              <Text>{member.occupation}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  member: {
    marginBottom: 10,
  },
});

export default MembersPDF;
