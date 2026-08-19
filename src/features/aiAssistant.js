const urgentKeywords = ['chest pain', 'breathing', 'confusion', 'unconscious', 'severe weakness'];

export function buildAssistantReply(message) {
  const normalized = message.toLowerCase();
  const urgent = urgentKeywords.some((keyword) => normalized.includes(keyword));

  if (urgent) {
    return {
      level: 'Urgent',
      text: 'Urgent attention: your symptoms may need prompt professional care. Please seek medical help as soon as possible.'
    };
  }

  if (normalized.includes('medicine') || normalized.includes('tablet') || normalized.includes('antibiotic')) {
    return {
      level: 'Medical Review',
      text: 'I cannot prescribe medicines. Please consult an authorized doctor for medicine, dosage, and treatment decisions.'
    };
  }

  return {
    level: 'Low Concern',
    text: 'I can share general information, not a diagnosis. How high is the fever, and are there warning signs such as breathing difficulty, confusion, chest pain, or severe weakness? Seek urgent care for serious symptoms.'
  };
}
