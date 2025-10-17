# Islamic APIs Documentation

This document provides comprehensive information about all APIs available in the Nur App.

## 📖 Table of Contents

1. [Quran API](#quran-api)
2. [Audio Recitation API](#audio-recitation-api)
3. [Hadith API](#hadith-api)
4. [Tafsir API](#tafsir-api)
5. [Prayer Times API](#prayer-times-api)

---

## 1. Quran API

**File:** `src/api/quran.api.ts`

### Features
- ✅ Complete Quran text (114 Surahs)
- ✅ Multiple translations
- ✅ Search verses by keyword
- ✅ Verse-by-verse access
- ✅ Chapter information
- ✅ Offline caching (7 days)

### Usage Examples

```typescript
import { fetchSurahs, fetchVersesBySurah, searchVerses } from '@/api/quran.api';

// Get all surahs
const surahs = await fetchSurahs();

// Get verses from Surah Al-Fatiha with English translation
const verses = await fetchVersesBySurah(1, 131); // 131 = Dr. Mustafa Khattab

// Search for verses
const results = await searchVerses('paradise');
```

### Available Translations
- **131**: English - Dr. Mustafa Khattab (Clear Quran)
- **85**: English - Abdullah Yusuf Ali
- **19**: English - Saheeh International

---

## 2. Audio Recitation API ✨ NEW

**File:** `src/api/recitation.api.ts`

### Features
- 🎵 Multiple famous reciters
- 📻 Various recitation styles (Riwayat)
- 🔊 Hafs, Warsh, and Qalun recitations
- ⏱️ Verse-by-verse timing data
- 💾 Offline download support
- 📱 Streaming audio URLs

### Popular Reciters

#### Hafs 'an 'Asim (Most Common)
- **Mishary Al-Afasy** - Clear, melodious
- **Abdul Basit Abdus Samad** - Legendary reciter (Murattal & Mujawwad)
- **Mahmoud Khalil Al-Husary** - Educational style
- **Saad Al-Ghamdi** - Emotional, beautiful
- **Abdur Rahman As-Sudais** - Imam of Masjid al-Haram
- **Abu Bakr Al-Shatri**
- **Ahmed Al-Ajmy**
- **Muhammad Ayyub**
- **Maher Al-Muaiqly**

#### Warsh 'an Nafi' (North African)
- **Yassin Al-Jazairi**

#### Qalun 'an Nafi'
- **Muhammad Siddiq Al-Minshawi**

### Usage Examples

```typescript
import { 
  fetchReciters, 
  fetchChapterAudio, 
  POPULAR_RECITERS,
  getRecitersByStyle 
} from '@/api/recitation.api';

// Get all reciters
const reciters = await fetchReciters();

// Get audio for Surah Al-Fatiha by Mishary Al-Afasy
const audio = await fetchChapterAudio(POPULAR_RECITERS.MISHARY_ALAFASY, 1);
console.log(audio.audio_url); // Stream this URL

// Get verse timings for synchronized highlighting
const timings = await fetchVerseTimings(7, 1);

// Get reciters by style
const warshReciters = await getRecitersByStyle('Warsh \'an Nafi\'');

// Download for offline use
await downloadAudioForOffline(audio.audio_url, 1, 7);
```

### Recitation Styles (Riwayat)

1. **Hafs 'an 'Asim**
   - Most widely used globally
   - Standard in most printed Mushafs
   - Used in Middle East, Asia, and most of the world

2. **Warsh 'an Nafi'**
   - Popular in North and West Africa
   - Used in Morocco, Algeria, Tunisia, parts of Libya

3. **Qalun 'an Nafi'**
   - Used in parts of Africa
   - Alternative to Warsh

---

## 3. Hadith API ✨ NEW

**File:** `src/api/hadith.api.ts`

### Features
- 📚 Six major authentic collections (Kutub al-Sittah)
- 🔍 Access to 40+ thousand hadiths
- 📖 Arabic text with English translations
- ✅ Authenticity grading
- 🌟 Hadith of the Day
- 💾 Offline caching (30 days)

### Available Collections

#### The Six Books (Kutub al-Sittah)
1. **Sahih al-Bukhari** (7,563 hadiths)
   - Most authentic collection
   - Compiled by Imam Bukhari

2. **Sahih Muslim** (7,190 hadiths)
   - Second most authentic
   - Compiled by Imam Muslim

3. **Sunan Abu Dawud** (5,274 hadiths)
   - Focus on legal matters
   - Jurisprudence hadiths

4. **Jami' at-Tirmidhi** (3,956 hadiths)
   - Includes authenticity grades
   - Comprehensive collection

5. **Sunan an-Nasa'i** (5,758 hadiths)
   - Strict authenticity criteria
   - High-quality narrations

6. **Sunan Ibn Majah** (4,341 hadiths)
   - Final book of the six

#### Other Important Collections
- **Riyad as-Salihin** (1,896 hadiths) - Gardens of the Righteous
- **40 Hadith Nawawi** (42 hadiths) - Essential hadiths
- **40 Hadith Qudsi** (40 hadiths) - Sacred hadiths
- **Muwatta Malik**
- **Musnad Ahmad**
- **Bulugh al-Maram**

### Usage Examples

```typescript
import { 
  fetchHadith, 
  fetchHadithBooks,
  getHadithOfTheDay,
  HADITH_COLLECTIONS 
} from '@/api/hadith.api';

// Get all available collections
const books = await fetchHadithBooks();

// Get a specific hadith from Sahih Bukhari
const hadith = await fetchHadith(HADITH_COLLECTIONS.SAHIH_BUKHARI, 1);
console.log(hadith.arab); // Arabic text
console.log(hadith.text); // English translation

// Get hadith of the day
const dailyHadith = await getHadithOfTheDay();

// Get random hadith from Sahih Muslim
const randomHadith = await getRandomHadith(HADITH_COLLECTIONS.SAHIH_MUSLIM);

// Get multiple hadiths (range)
const hadiths = await fetchHadithRange(HADITH_COLLECTIONS.SAHIH_BUKHARI, '1-10');

// Check authenticity
const isAuthentic = isHadithAuthentic(hadith);
const grade = getHadithGrade(hadith);
```

### Hadith Object Structure

```typescript
{
  number: 1,
  arab: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ...", // Arabic text
  id: "bukhari:1",
  text: "Actions are by intentions...", // English
  grades: [{ name: "Al-Albani", grade: "Sahih" }],
  chapter: "Revelation",
  narrator: "Umar ibn al-Khattab",
  reference: "Sahih al-Bukhari 1"
}
```

---

## 4. Tafsir API

**File:** `src/api/tafsir.api.ts`

### Features
- 📖 Verified tafsir sources only
- 🔐 Ibn Kathir, Al-Jalalayn, and more
- 🌍 Multiple languages
- 📝 Verse-by-verse commentary
- 💾 Offline caching (30 days)

### Available Tafsirs

- **Ibn Kathir** (English) - Most popular classical tafsir
- **Al-Jalalayn** (English) - Concise interpretation
- **Maarif-ul-Quran** (English) - Mufti Muhammad Shafi
- **Al-Tafsir Al-Maysar** (Arabic) - King Fahd Complex

### Usage Examples

```typescript
import { fetchTafsirForVerse, TAFSIR_SOURCES } from '@/api/tafsir.api';

// Get tafsir for Surah 1, Verse 1 (Bismillah)
const tafsir = await fetchTafsirForVerse(1, 1, TAFSIR_SOURCES.IBN_KATHIR_EN);
console.log(tafsir.text); // Full commentary

// Get tafsir for entire chapter
const chapterTafsir = await fetchTafsirForChapter(1, TAFSIR_SOURCES.IBN_KATHIR_EN);
```

---

## 5. Prayer Times API

**File:** `src/api/prayer.api.ts`

### Features
- 🕌 Accurate prayer times
- 📍 Location-based (GPS or City)
- 🌍 Multiple calculation methods
- 🗓️ Hijri & Gregorian dates
- ⏰ Next prayer countdown
- 💾 Daily caching

### Calculation Methods

- **MWL** (Muslim World League) - General
- **ISNA** (Islamic Society of North America)
- **EGYPT** (Egyptian General Authority)
- **MAKKAH** (Umm Al-Qura, Makkah)
- **KARACHI** (University of Islamic Sciences)

### Usage Examples

```typescript
import { 
  fetchPrayerTimesByCoordinates,
  getNextPrayer,
  CALCULATION_METHODS 
} from '@/api/prayer.api';

// Get prayer times by location
const times = await fetchPrayerTimesByCoordinates(
  33.5731,  // Casablanca latitude
  -7.5898,  // Casablanca longitude
  CALCULATION_METHODS.MWL
);

console.log(times.timings.Fajr);   // "05:30"
console.log(times.timings.Dhuhr);  // "13:15"

// Get next prayer
const nextPrayer = getNextPrayer(times.timings);
console.log(nextPrayer.displayName); // "Asr"

// Get time until next prayer
const timeRemaining = getTimeUntilNextPrayer(nextPrayer);
console.log(timeRemaining); // "2h 30m"
```

---

## 🚀 Integration Examples

### Play Audio While Showing Verses

```typescript
import { fetchVersesBySurah } from '@/api/quran.api';
import { fetchChapterAudio, fetchVerseTimings } from '@/api/recitation.api';

// Get verses and audio for Surah Al-Fatiha
const verses = await fetchVersesBySurah(1);
const audio = await fetchChapterAudio(7, 1); // Mishary Al-Afasy
const timings = await fetchVerseTimings(7, 1);

// Play audio and highlight verses based on timings
// Use React Native Audio player (expo-av)
```

### Daily Islamic Content

```typescript
import { getRandomVerse } from '@/api/quran.api';
import { getHadithOfTheDay } from '@/api/hadith.api';

// Verse of the Day
const dailyVerse = await getRandomVerse();

// Hadith of the Day
const dailyHadith = await getHadithOfTheDay();

// Display both on home screen
```

### Complete Quran Study Screen

```typescript
import { fetchVersesBySurah } from '@/api/quran.api';
import { fetchTafsirForVerse } from '@/api/tafsir.api';
import { fetchChapterAudio } from '@/api/recitation.api';

// Verse text
const verses = await fetchVersesBySurah(2); // Al-Baqarah

// Tafsir for selected verse
const tafsir = await fetchTafsirForVerse(2, 255); // Ayat al-Kursi

// Audio recitation
const audio = await fetchChapterAudio(7, 2);
```

---

## 📦 Required Dependencies

All dependencies are already in your `package.json`:

```json
{
  "axios": "^1.6.2",
  "@react-native-async-storage/async-storage": "^1.19.5",
  "date-fns": "^2.30.0"
}
```

---

## 🎯 Best Practices

1. **Caching**: All APIs implement offline caching automatically
2. **Error Handling**: Always wrap API calls in try-catch blocks
3. **Loading States**: Show loading indicators during API calls
4. **Offline Support**: Check network before making requests
5. **Pagination**: Use `per_page` parameter for large data sets

---

## 🔐 Data Verification

All APIs use verified Islamic sources:

- **Quran**: Quran.com API (verified by scholars)
- **Hadith**: Authenticated collections only
- **Tafsir**: Verified classical scholars only
- **Prayer Times**: Standard astronomical calculations

---

## 📞 Support

For issues or questions:
- Check cache if data isn't loading
- Verify internet connection
- Clear app cache if needed
- Check API base URLs are accessible

---

## 🆕 What's New

### Version 2.0
- ✨ **Audio Recitation API** - Multiple reciters and riwayat
- ✨ **Hadith API** - 40,000+ authentic hadiths
- 📱 Improved offline support
- 🎵 Verse timing synchronization
- 📚 Expanded hadith collections

---

Made with ❤️ for the Muslim Ummah

